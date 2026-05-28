// src/lib/blog.ts
// Централізована утиліта для роботи зі статтями блогу.
// Єдине місце де діє логіка сортування, фільтрації і ліміту.

import { blogPosts } from '../data/blogPosts';

export type BlogPost = (typeof blogPosts)[number];

function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
  );
}

/** Всі статті, відсортовані від найновішої до найстарішої. */
export function getAllPosts(): BlogPost[] {
  return sortByDate(blogPosts);
}

/** Останні N статей (за замовчуванням 8). */
export function getLatestPosts(limit = 8): BlogPost[] {
  return sortByDate(blogPosts).slice(0, limit);
}

/** Статті за сервісним кластером, відсортовані, з лімітом. */
export function getPostsByService(service: string, limit = 8): BlogPost[] {
  return sortByDate(blogPosts)
    .filter(post => post.service?.includes(service))
    .slice(0, limit);
}
