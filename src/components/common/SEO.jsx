import React, { useEffect } from 'react';

const SEO = ({
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage = '/images/LOGO.png',
    ogUrl,
    canonical,
    schemas = []
}) => {
    useEffect(() => {
        // Update document title
        if (title) {
            document.title = title;
        }

        // Helper to get or create meta tag
        const updateOrCreateMeta = (nameAttr, nameValue, contentValue) => {
            if (!contentValue) return;
            let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
            if (element) {
                element.setAttribute('content', contentValue);
            } else {
                element = document.createElement('meta');
                element.setAttribute(nameAttr, nameValue);
                element.setAttribute('content', contentValue);
                document.head.appendChild(element);
            }
        };

        // Update standard meta tags
        updateOrCreateMeta('name', 'description', description);
        updateOrCreateMeta('name', 'keywords', keywords);

        // Update Open Graph meta tags
        updateOrCreateMeta('property', 'og:title', ogTitle || title);
        updateOrCreateMeta('property', 'og:description', ogDescription || description);
        updateOrCreateMeta('property', 'og:image', ogImage);
        updateOrCreateMeta('property', 'og:url', ogUrl || window.location.href);
        updateOrCreateMeta('property', 'og:type', 'website');

        // Update Canonical Link tag
        const canonicalUrl = canonical || window.location.href;
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', canonicalUrl);
        } else {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            canonicalLink.setAttribute('href', canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        // Add Structured Data Schemas
        const scriptTags = [];
        if (schemas && schemas.length > 0) {
            schemas.forEach((schema, index) => {
                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.id = `ld-schema-${index}`;
                script.innerHTML = JSON.stringify(schema);
                document.head.appendChild(script);
                scriptTags.push(script);
            });
        }

        // Cleanup function to remove script tags and reset meta tags
        return () => {
            scriptTags.forEach(script => {
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            });
        };
    }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, canonical, schemas]);

    return null; // Render nothing visible
};

export default SEO;
