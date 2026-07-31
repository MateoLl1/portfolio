import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

@Component({
  selector: 'app-lines-background',
  standalone: true,
  templateUrl: './lines-background.component.html',
  styleUrl: './lines-background.component.scss',
})
export class LinesBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) private readonly canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private points: Point[] = [];
  private frameId = 0;
  private width = 0;
  private height = 0;
  private readonly maxLinkDistance = 160;
  private readonly reducedMotion =
    typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    this.handleResize();

    if (!this.reducedMotion) {
      this.frameId = requestAnimationFrame(() => this.tick());
    } else {
      this.draw();
    }
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
  }

  @HostListener('window:resize')
  handleResize(): void {
    const canvas = this.canvasRef.nativeElement;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    canvas.width = this.width * dpr;
    canvas.height = this.height * dpr;
    canvas.style.width = `${this.width}px`;
    canvas.style.height = `${this.height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const density = (this.width * this.height) / 18000;
    const count = Math.max(24, Math.min(110, Math.round(density)));
    this.points = Array.from({ length: count }, () => this.createPoint());

    if (this.reducedMotion) this.draw();
  }

  private createPoint(): Point {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    };
  }

  private tick(): void {
    this.step();
    this.draw();
    this.frameId = requestAnimationFrame(() => this.tick());
  }

  private step(): void {
    for (const p of this.points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x <= 0 || p.x >= this.width) p.vx *= -1;
      if (p.y <= 0 || p.y >= this.height) p.vy *= -1;
      p.x = Math.max(0, Math.min(this.width, p.x));
      p.y = Math.max(0, Math.min(this.height, p.y));
    }
  }

  private draw(): void {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.points.length; i++) {
      const a = this.points[i];
      for (let j = i + 1; j < this.points.length; j++) {
        const b = this.points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.maxLinkDistance) {
          const opacity = (1 - dist / this.maxLinkDistance) * 0.35;
          ctx.strokeStyle = `rgba(100, 255, 218, ${opacity})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    ctx.fillStyle = 'rgba(204, 214, 246, 0.65)';
    for (const p of this.points) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
