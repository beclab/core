export interface FileSearchIndexName {
	Terminus: 'terminus';
	Rss: 'rss';
}

export interface FileSearchAddRequest {
	index?: FileSearchIndexName;
	doc?: string;
	path?: string;
	filename?: string;
	content?: string;
}

export interface FileSearchDeleteRequest {
	index?: FileSearchIndexName;
	docId?: string;
}

export interface FileSearchQueryRequest {
	index?: FileSearchIndexName;
	query?: string;
	limit?: number;
	offset?: number;
}

export interface FileSearchResponseItem {
	name: string; //文件名
	docId: string; //文件编号
	where: string; //路径
	type: string; //扩展名
	size: number; //字节数
	created: number; //创建时间戳
	content: string; //文件内容
}

export interface FileSearchResponse {
	count: number;
	offset: number;
	limit: number;
	items: FileSearchResponseItem[];
}

export interface FileSearchAIQuestionRequest {
	message: string;
	callback: string;
	conversationId?: string;
	path?: string;
}

export interface FileSearchAIQuestionResponse {
	messageId: string;
	conversationId: string;
}

export interface FileSearchAIQuestionMessage {
	messageId: string;
	text: string;
	model: string;
	conversationId: string;
	done: boolean;
}

export interface FileSearchRssAddRequest {
	name: string;
	entry_id: number;
	created: number;
	feed_infos: [
		{
			feed_id: number;
			feed_name: number;
			feed_icon: string;
		}
	];
	borders: [
		{
			name: string;
			id: number;
		}
	];
	content: string;
}

export interface FileSearchRssDeleteRequest {
	docId: string;
}

export interface FileSearchRssQueryRequest {
	query: string;
	limit: number;
}

export interface FileSearchRssResponseItem {
	name: string;
	entry_id: number;
	created: number;
	feed_infos: [
		{
			feed_id: number;
			feed_name: number;
			feed_icon: string;
		}
	];
	borders: [
		{
			name: string;
			id: number;
		}
	];
	docId: string;
	snippet: string;
}

export interface FileSearchRssQueryResponse {
	count: 10;
	offset: 0;
	limit: 10;
	items: FileSearchRssResponseItem[];
}
