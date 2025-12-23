const FILE_ICON_CONFIG: { [key: string]: string[] } = {
	image: [
		'png',
		'jpg',
		'jpeg',
		'bmp',
		'gif',
		'heic',
		'webp',
		'svg',
		'tif',
		'tiff',
		'raw'
	],
	txt: [
		'txt',
		'py',
		'c',
		'cpp',
		'java',
		'js',
		'ts',
		'php',
		'sql',
		'html',
		'htm',
		'css',
		'sh',
		'swift',
		'm',
		'cs',
		'go',
		'rb',
		'pl',
		'pm',
		'lua',
		'vbp',
		'.for',
		'.f90',
		'pas',
		'dpr',
		'rs',
		'asm',
		'kt',
		'r',
		'sb3',
		'xml',
		'yaml',
		'config',
		'json'
	],
	epub: ['epub'],
	excel: ['xls', 'xlsx'],
	word: ['doc', 'docx'],
	pdf: ['pdf'],
	ppt: ['ppt', 'pptx'],
	zip: ['rar', 'zip', '7z'],
	video: [
		'mp4',
		'm2v',
		'mkv',
		'rmvb',
		'wmv',
		'avi',
		'flv',
		'mov',
		'm4v',
		'ape',
		'webm',
		'vob',
		'mpg',
		'3gp',
		'rm',
		'ogg'
	],
	audio: ['mp3', 'wav', 'm4a', 'flac']
};

export function getFileIcon(fileName: string): string {
	if (!fileName) return 'other';

	// 提取文件扩展名并转为小写
	const extension = fileName.split('.').pop()?.toLowerCase();
	if (!extension) return 'other';

	// 遍历配置查找匹配的图标类型
	for (const iconType in FILE_ICON_CONFIG) {
		const extensions = FILE_ICON_CONFIG[iconType];
		if (extensions.indexOf(extension) !== -1) {
			return iconType;
		}
	}

	return 'other';
}

const FILE_TYPE_CONFIG: { [key: string]: string[] } = {
	DOC: ['doc'],
	DOCX: ['docx'],
	ODT: ['odt'],
	PAGES: ['pages'],
	PDF: ['pdf'],
	PPT: ['ppt', 'pptx'],
	XLSX: ['xls', 'xlsx'],
	RFT: ['rft'],
	XML: ['xml'],
	HTML: ['xhtml', 'html', 'htm'],
	JPEG: ['jpg', 'jpeg', 'jpe', 'jfif', 'jfif-tbnl'],
	PNG: ['png'],
	GIF: ['gif'],
	RAW: ['raw'],
	BMP: ['bmp'],
	SVG: ['svg'],
	WEBP: ['webp'],
	HEIC: ['heic'],
	TIFF: ['tif', 'tiff'],
	TXT: [
		'txt',
		'py',
		'c',
		'cpp',
		'java',
		'js',
		'ts',
		'php',
		'sql',
		'html',
		'htm',
		'css',
		'sh',
		'swift',
		'm',
		'cs',
		'go',
		'rb',
		'pl',
		'pm',
		'lua',
		'vbp',
		'.for',
		'.f90',
		'pas',
		'dpr',
		'rs',
		'asm',
		'kt',
		'r',
		'sb3',
		'epub',
		'config',
		'yaml'
	],
	EPUB: ['epub'],
	CSS: ['css', 'scss', 'sass', 'less', 'style'],
	JS: ['js', 'ts'],
	JSON: ['json'],
	ZIP: ['zip'],
	RAR: ['rar'],
	'7-ZIP': ['7z'],
	TAR: ['tar'],
	GZIP: ['gz'],
	BZIP2: ['bz2'],
	MP3: ['mp3'],
	M4A: ['m4a'],
	WAV: ['wav'],
	AAC: ['aac'],
	MP4: ['mp4', 'm4v'],
	VIDEO: [
		'avi',
		'mov',
		'wmv',
		'm2v',
		'mkv',
		'rmvb',
		'flv',
		'webm',
		'vob',
		'mpg',
		'3gp',
		'rm',
		'ogg'
	]
};

export function getFileType(fileName: string): string {
	if (!fileName) return 'blob';

	// 提取文件扩展名并转为小写
	const extension = fileName.split('.').pop()?.toLowerCase();
	if (!extension) return 'blob';

	// 遍历配置查找匹配的文件类型
	for (const fileType in FILE_TYPE_CONFIG) {
		const extensions = FILE_TYPE_CONFIG[fileType];
		if (extensions.indexOf(extension) !== -1) {
			return fileType;
		}
	}

	return 'blob';
}
