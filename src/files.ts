
export function getFileIcon(fileName: string): string {
	let suffix = '';
	let result: string | undefined = '';
	if (fileName) {
		const fileArr = fileName.split('.');
		suffix = fileArr[fileArr.length - 1];
	}
	if (!suffix) return 'other';
	suffix = suffix.toLocaleLowerCase();

	const imgList = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'heic', 'webp', 'svg'];
	result = imgList.find((item) => item === suffix);
	if (result) return 'image';
	// txt
	const txtList = ['txt', 'py', 'c', 'cpp', 'java', 'js', 'ts', 'php', 'sql', 'html', 'htm', 'css', 'sh', 'swift', 'm', 'cs', 'go', 'rb', 'pl', 'pm', 'lua', 'm', 'vbp', '.for', '.f90', 'pas',  'dpr', 'rs', 'asm', 'kt', 'r', 'sb3'];
	result = txtList.find((item) => item === suffix);
	if (result) return 'txt';
	// epub
	const epubList = ['epub'];
	result = epubList.find((item) => item === suffix);
	if (result) return 'epub';
	// excel
	const excelList = ['xls', 'xlsx'];
	result = excelList.find((item) => item === suffix);
	if (result) return 'excel';
	// word
	const wordList = ['doc', 'docx'];
	result = wordList.find((item) => item === suffix);
	if (result) return 'word';
	// pdf
	const pdfList = ['pdf'];
	result = pdfList.find((item) => item === suffix);
	if (result) return 'pdf';
	// ppt
	const pptList = ['ppt', 'pptx'];
	result = pptList.find((item) => item === suffix);
	if (result) return 'ppt';
	// zip
	const zipList = ['rar', 'zip', '7z'];
	result = zipList.find((item) => item === suffix);
	if (result) return 'zip';
	// video
	const videoList = [
		'mp4',
		'm2v',
		'mkv',
		'rmvb',
		'wmv',
		'avi',
		'flv',
		'mov',
		'm4v',
	];
	result = videoList.find((item) => item === suffix);
	if (result) return 'video';
	// audio
	const audioList = ['mp3', 'wav', 'm4a'];
	result = audioList.find((item) => item === suffix);
	if (result) return 'audio';
	// other
	return 'other';
}

export function getFileType(fileName: string): string {
	let suffix = '';
	let result: string | undefined = '';
	if (fileName) {
		const fileArr = fileName.split('.');
		suffix = fileArr[fileArr.length - 1];
	}
	if (!suffix) return 'blob';
	suffix = suffix.toLocaleLowerCase();

	const docList = ['doc'];
	result = docList.find((item) => item === suffix);
	if (result) return 'DOC';

  const docxList = ['docx'];
	result = docxList.find((item) => item === suffix);
  if (result) return 'DOCX';
  
  const odtList = ['odt'];
	result = odtList.find((item) => item === suffix);
  if (result) return 'ODT';
  
  const pagesList = ['pages'];
	result = pagesList.find((item) => item === suffix);
	if (result) return 'PAGES';

  const pdfList = ['pdf'];
	result = pdfList.find((item) => item === suffix);
	if (result) return 'PDF';

  const pptList = ['ppt', 'pptx'];
	result = pptList.find((item) => item === suffix);
	if (result) return 'PPT';

  const xlsList = ['xls', 'xlsx'];
	result = xlsList.find((item) => item === suffix);
	if (result) return 'XLSX';

  const rftList = ['rft'];
	result = rftList.find((item) => item === suffix);
	if (result) return 'RFT';

  const xmlList = ['xml'];
	result = xmlList.find((item) => item === suffix);
	if (result) return 'XML';

  const htmlList = ['xhtml', 'html', 'htm'];
	result = htmlList.find((item) => item === suffix);
	if (result) return 'HTML';

  const jpgList = ['jpg', 'jpeg', 'jpe', 'jfif', 'jfif-tbnl'];
	result = jpgList.find((item) => item === suffix);
	if (result) return 'JPEG';

  const pngList = ['png'];
	result = pngList.find((item) => item === suffix);
	if (result) return 'PNG';

  const gifList = ['gif'];
	result = gifList.find((item) => item === suffix);
	if (result) return 'GIF';

  const bmpList = ['bmp'];
	result = bmpList.find((item) => item === suffix);
	if (result) return 'BMP';

  const svgList = ['svg'];
	result = svgList.find((item) => item === suffix);
	if (result) return 'SVG';

  const webpList = ['webp'];
	result = webpList.find((item) => item === suffix);
	if (result) return 'WEBP';

	const heicList = ['heic'];
	result = heicList.find((item) => item === suffix);
	if (result) return 'HEIC';

  const tiffList = ['tif', 'tiff'];
	result = tiffList.find((item) => item === suffix);
  if (result) return 'TIFF';
  
  const txtList = ['txt', 'py', 'c', 'cpp', 'java', 'js', 'ts', 'php', 'sql', 'html', 'htm', 'css', 'sh', 'swift', 'm', 'cs', 'go', 'rb', 'pl', 'pm', 'lua', 'm', 'vbp', '.for', '.f90', 'pas',  'dpr', 'rs', 'asm', 'kt', 'r', 'sb3', 'epub'];
	result = txtList.find((item) => item === suffix);
	if (result) return 'TXT';
	
	const epubList = ['epub'];
	result = epubList.find((item) => item === suffix);
  if (result) return 'EPUB';
  
  const cssList = ['css', 'scss', 'sass', 'less', 'style'];
	result = cssList.find((item) => item === suffix);
  if (result) return 'CSS';
  
  const jsList = ['js', 'ts'];
	result = jsList.find((item) => item === suffix);
  if (result) return 'JS';
  
  const jsonList = ['json'];
	result = jsonList.find((item) => item === suffix);
  if (result) return 'JSON';
  
  const zipList = ['zip'];
	result = zipList.find((item) => item === suffix);
	if (result) return 'ZIP';

  const rarList = ['rar'];
	result = rarList.find((item) => item === suffix);
	if (result) return 'RAR';

  const zip7List = ['7z'];
	result = zip7List.find((item) => item === suffix);
  if (result) return '7-ZIP';
  
  const tarList = ['tar'];
	result = tarList.find((item) => item === suffix);
  if (result) return 'TAR';
  
  const gzList = ['gz'];
	result = gzList.find((item) => item === suffix);
  if (result) return 'GZIP';
  
  const bz2List = ['bz2'];
	result = bz2List.find((item) => item === suffix);
	if (result) return 'BZIP2';

  const mp3List = ['mp3'];
	result = mp3List.find((item) => item === suffix);
	if (result) return 'MP3';
	
	const m4aList = ['m4a'];
	result = m4aList.find((item) => item === suffix);
  if (result) return 'M4A';
  
  const wavList = ['wav'];
	result = wavList.find((item) => item === suffix);
  if (result) return 'WAV';
  
  const aacList = ['aac'];
	result = aacList.find((item) => item === suffix);
  if (result) return 'AAC';
  
  const mp4List = ['mp4', 'm4v'];
	result = mp4List.find((item) => item === suffix);
	if (result) return 'MP4';
	
  const aviList = ['avi', 'mov', 'wmv', 'm2v', 'mkv', 'rmvb', 'flv'];
	result = aviList.find((item) => item === suffix);
	if (result) return 'VIDEO';

	return 'blob';
}