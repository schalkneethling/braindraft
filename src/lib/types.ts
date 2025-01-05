export type DraftItem = {
	draftStatus: string;
	draftType: string;
	notes: string;
	publishDate: string;
	slug: string;
	tags?: string[];
	title: string;
};

export type DraftItemsContext = {
	addDraftItem: (drafttItem: FormData) => void;
};
