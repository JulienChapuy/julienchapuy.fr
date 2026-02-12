import React from 'react';

interface SocialBadgeProps {
    name: string;
    url: string;
    icon: string;
    className?: string;
}

const SocialBadge: React.FC<SocialBadgeProps> = ({ name, url, icon, className }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border hover:border-primary hover:text-primary transition-all duration-200 ${className || ''}`}
            aria-label={name}
        >
            <i className={`${icon} text-lg`}></i>
        </a>
    );
};

export default SocialBadge;
