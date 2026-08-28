export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  isPlaceholder: boolean;
  projectSlug: string | null;
};

/**
 * No reviews are invented. Every entry here is a clearly marked
 * placeholder until the client supplies real, attributable reviews.
 */
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "[REAL CLIENT REVIEW TO BE ADDED]",
    name: "[CLIENT NAME]",
    role: "[POSITION]",
    company: "[COMPANY]",
    isPlaceholder: true,
    projectSlug: null,
  },
  {
    id: "testimonial-2",
    quote: "[REAL CLIENT REVIEW TO BE ADDED]",
    name: "[CLIENT NAME]",
    role: "[POSITION]",
    company: "[COMPANY]",
    isPlaceholder: true,
    projectSlug: null,
  },
  {
    id: "testimonial-3",
    quote: "[REAL CLIENT REVIEW TO BE ADDED]",
    name: "[CLIENT NAME]",
    role: "[POSITION]",
    company: "[COMPANY]",
    isPlaceholder: true,
    projectSlug: null,
  },
];
