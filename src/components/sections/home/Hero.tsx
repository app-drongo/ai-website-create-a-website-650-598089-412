'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrimaryAction = () => {
    router.push('/signup');
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true);
  };

  const handleBadgeAction = () => {
    router.push('/features');
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
            >
              <Zap className="size-4 mr-2" />
              New: AI-Powered Cloud Automation
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Automate Your Cloud
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Infrastructure
              </span>
              With One Click
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Deploy, scale and manage cloud resources automatically with our intelligent platform.
              Reduce costs and complexity while maximizing performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handlePrimaryAction}
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8 border-primary text-primary hover:bg-primary/10"
                onClick={handleSecondaryAction}
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                View Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary/80 to-primary/40 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary/60 to-primary/20 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  5,000+ companies
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border border-primary/20 bg-card p-2 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="size-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Play className="size-8 text-primary ml-1" />
                    </div>
                    <p className="text-primary">Platform Overview</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 size-6 bg-primary/60 rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 size-4 bg-primary/40 rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
