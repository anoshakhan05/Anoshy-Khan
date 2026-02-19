'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return (
                <div className="w-full h-full flex items-center justify-center bg-secondary text-foreground p-4">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Something went wrong</h3>
                        <p className="text-sm opacity-70">Please refresh the page</p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
