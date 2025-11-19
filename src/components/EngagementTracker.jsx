import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const EngagementTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track external link clicks
    const handleExternalLinkClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.href && (link.target === '_blank' || link.href.startsWith('http'))) {
        const url = new URL(link.href);
        if (url.hostname !== window.location.hostname) {
          if (window.gtag) {
            window.gtag('event', 'external_link_click', {
              link_url: link.href,
              link_text: link.textContent?.trim() || 'unknown',
              page: location.pathname,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleExternalLinkClick);
    return () => document.removeEventListener('click', handleExternalLinkClick);
  }, [location.pathname]);

  // Track video plays (if any)
  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      const handlePlay = () => {
        if (window.gtag) {
          window.gtag('event', 'video_play', {
            video_title: video.title || 'unknown',
            page: location.pathname,
          });
        }
      };

      video.addEventListener('play', handlePlay);
      return () => video.removeEventListener('play', handlePlay);
    });
  }, [location.pathname]);

  // Track download clicks
  useEffect(() => {
    const handleDownloadClick = (e) => {
      const link = e.target.closest('a');
      if (link && (link.href.endsWith('.pdf') || link.href.endsWith('.zip') || link.href.endsWith('.doc'))) {
        if (window.gtag) {
          window.gtag('event', 'file_download', {
            file_name: link.href.split('/').pop(),
            file_type: link.href.split('.').pop(),
            page: location.pathname,
          });
        }
      }
    };

    document.addEventListener('click', handleDownloadClick);
    return () => document.removeEventListener('click', handleDownloadClick);
  }, [location.pathname]);

  // Track social media clicks
  useEffect(() => {
    const handleSocialClick = (e) => {
      const link = e.target.closest('a');
      if (link) {
        const href = link.href.toLowerCase();
        let platform = null;

        if (href.includes('whatsapp')) platform = 'whatsapp';
        else if (href.includes('linkedin')) platform = 'linkedin';
        else if (href.includes('github')) platform = 'github';
        else if (href.includes('twitter') || href.includes('x.com')) platform = 'twitter';
        else if (href.includes('instagram')) platform = 'instagram';
        else if (href.includes('facebook')) platform = 'facebook';
        else if (href.includes('mailto')) platform = 'email';
        else if (href.includes('tel:')) platform = 'phone';

        if (platform) {
          if (window.gtag) {
            window.gtag('event', 'social_click', {
              platform: platform,
              page: location.pathname,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSocialClick);
    return () => document.removeEventListener('click', handleSocialClick);
  }, [location.pathname]);

  return null;
};

export default EngagementTracker;
