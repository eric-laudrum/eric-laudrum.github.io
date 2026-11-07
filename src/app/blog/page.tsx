'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

type ContentBlock =
    | { type: 'text'; value: string }
    | { type: 'image'; value: string; alt: string }
    | { type: 'youtube'; value: string };

interface BlogPost {
    id: string;
    title: string;
    date: string;
    category: string;
    content: ContentBlock[];
    relatedProjectLink?: string;
}

const initialPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Building the Custom Lasso Tool for Civic Tech',
        date: '2026-11-06',
        category: 'Civic Tech',
        content: [
            { type: 'text', value: 'Mapping resources accurately is a major challenge for community initiatives.' },
            { type: 'text', value: 'This custom implementation allows users to draw freehand boundaries over the dissemination area to pull localized census data seamlessly.' },
            { type: 'image', value: '/images/lasso-tool-demo.png', alt: 'Lasso tool in action' }
        ],
        relatedProjectLink: '/projects/one-million-neighbours'
    },
    {
        id: '2',
        title: 'Trellis Sequencer: Solving Audio Latency in the Browser',
        date: '2026-10-15',
        category: 'Music Tech',
        content: [
            { type: 'text', value: 'Syncing real-time audio across different devices introduces significant timing drift. Relying on standard WebSocket emissions without accounting for local client audio clocks leads to a messy sequence.' },
            { type: 'youtube', value: 'https://www.youtube-nocookie.com/embed/VIDEO_ID](https://www.youtube-nocookie.com/embed/VIDEO_ID' }
        ],
        relatedProjectLink: '/projects/trellis'
    },
    {
        id: '3',
        title: 'Trinket Mag: Designing a Draggable E-Commerce Experience',
        date: '2026-09-22',
        category: 'Web Development',
        content: [
            { type: 'text', value: 'Standard grid layouts for e-commerce can feel sterile. For Trinket Mag, the goal was to mimic the physical act of sorting through a collection on a desk.' }
        ]
    }
];

export default function Page() {
    const [posts] = useState<BlogPost[]>(initialPosts);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

    const categories = useMemo(() => {
        const cats = posts.map(post => post.category);
        return ['All', ...Array.from(new Set(cats))];
    }, [posts]);

    const filteredAndSortedPosts = useMemo(() => {
        let result = [...posts];

        if (selectedCategory !== 'All') {
            result = result.filter(post => post.category === selectedCategory);
        }

        result.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
        });

        return result;
    }, [posts, selectedCategory, sortOrder]);

    return (
        <main className={styles.blogContainer}>
            <h1 className={styles.blogTitle}>Project Log</h1>

            <div className={styles.controls}>
                <select
                    className={styles.dropdown}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                <button
                    className={styles.sortButton}
                    onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
                >
                    Sort: {sortOrder === 'desc' ? 'Newest' : 'Oldest'}
                </button>
            </div>

            <div className={styles.postList}>
                {filteredAndSortedPosts.map(post => (
                    <article key={post.id} className={styles.postCard}>
                        <header className={styles.postHeader}>
                            <h2 className={styles.postTitle}>{post.title}</h2>
                            <div className={styles.postMeta}>
                                <span className={styles.postDate}>{post.date}</span>
                                <span className={styles.postCategory}>{post.category}</span>
                            </div>
                        </header>

                        <div className={styles.postContent}>
                            {post.content.map((block, index) => {
                                if (block.type === 'text') {
                                    return <p key={index} className={styles.postText}>{block.value}</p>;
                                }
                                if (block.type === 'image') {
                                    return (
                                        <img
                                            key={index}
                                            src={block.value}
                                            alt={block.alt}
                                            className={styles.postImage}
                                        />
                                    );
                                }
                                if (block.type === 'youtube') {
                                    return (
                                        <div key={index} className={styles.videoWrapper}>
                                            <iframe
                                                src={block.value}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className={styles.videoIframe}
                                            ></iframe>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        {post.relatedProjectLink && (
                            <Link href={post.relatedProjectLink} className={styles.projectLink}>
                                View Related Project →
                            </Link>
                        )}
                    </article>
                ))}
            </div>
        </main>
    );
}