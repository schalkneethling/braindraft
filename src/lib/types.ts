export type ContentItem = {
	contentStatus: string;
	contentType: string;
	notes: string;
	publishDate: string;
	slug: string;
	tags?: string[];
	title: string;
};

export type ContentItemsContext = {
	addContentItem: (contentItem: FormData) => void;
};
