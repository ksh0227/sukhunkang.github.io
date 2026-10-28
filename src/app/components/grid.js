// The two-column grid shared by Home, Research, and Teaching. From md up, an
// 11rem label column (right-aligned italic labels) sits beside the content;
// below md each label stacks above what it labels. Label and content align on
// their first line of text (items-baseline), whatever their font sizes, so no
// padding nudges. A row whose content has no text (the class photos) would
// align to the bottom of its images, so it uses gridTopClass instead.
const gridColumns = "md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:gap-x-11";
export const gridClass = `${gridColumns} md:items-baseline`;
export const gridTopClass = `${gridColumns} md:items-start`;

// A section's name, in the label column.
export const sectionLabelClass =
  "text-2xl text-gray-900 md:text-[1.05rem] md:italic md:text-right";

// An entry's label (journal and year, course level and years).
export const entryLabelClass =
  "mb-1 md:mb-0 md:text-right text-[0.95rem] text-gray-600";

// One rule above each section, across both columns.
export const sectionClass = "mt-8 border-t border-gray-200 pt-10";

// The row holding a section's name when its entries carry their own labels.
export const sectionHeadClass = "pb-5";

export const pageTitleClass = "text-[2.4rem] leading-tight text-gray-900";

export const entryTitleClass =
  "text-[1.28rem] font-medium leading-snug tracking-[-0.005em] text-gray-900";

// Bulleted lists (a paper's awards).
export const bulletListClass = "list-disc pl-5 space-y-0.5 marker:text-gray-400";

// Standalone links (SSRN, Syllabus): the text color with a hairline underline.
export const textLinkClass =
  "underline decoration-accent underline-offset-[3px] hover:decoration-2 transition-colors duration-200";
