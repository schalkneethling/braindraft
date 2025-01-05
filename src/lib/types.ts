export type ContentItem = {
	contentStatus: string;
	contentType: string;
	notes: string;
	publishDate: string;
	tags?: string[];
	title: string;
};

export type ContentItemsContext = {
	addContentItem: (contentItem: FormData) => void;
};
