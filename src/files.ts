
export function getFileIcon(fileName: string) {
	let suffix = '';
	let result: string | undefined = '';
	if (fileName) {
		const fileArr = fileName.split('.');
		suffix = fileArr[fileArr.length - 1];
	}
	if (!suffix) return false;
	suffix = suffix.toLocaleLowerCase();

	const imgList = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
	result = imgList.find((item) => item === suffix);
	if (result) return 'image';
	// txt
	const txtList = ['txt'];
	result = txtList.find((item) => item === suffix);
	if (result) return 'txt';
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
		'm4v'
	];
	result = videoList.find((item) => item === suffix);
	if (result) return 'video';
	// audio
	const audioList = ['mp3', 'wav', 'wmv'];
	result = audioList.find((item) => item === suffix);
	if (result) return 'audio';
	// other
	return 'other';
}

export function getFileType(fileName: string) {
	let suffix = '';
	let result: string | undefined = '';
	if (fileName) {
		const fileArr = fileName.split('.');
		suffix = fileArr[fileArr.length - 1];
	}
	if (!suffix) return false;
	suffix = suffix.toLocaleLowerCase();

	const docList = ['doc'];
	result = docList.find((item) => item === suffix);
	if (result) return 'doc';

  const docxList = ['docx'];
	result = docxList.find((item) => item === suffix);
  if (result) return 'docx';
  
  const odtList = ['odt'];
	result = odtList.find((item) => item === suffix);
  if (result) return 'odt';
  
  const pagesList = ['pages'];
	result = pagesList.find((item) => item === suffix);
	if (result) return 'pages';

  const pdfList = ['pdf'];
	result = pdfList.find((item) => item === suffix);
	if (result) return 'pdf';

  const pptList = ['ppt', 'pptx'];
	result = pptList.find((item) => item === suffix);
	if (result) return 'ppt';

  const xlsList = ['xls', 'xlsx'];
	result = xlsList.find((item) => item === suffix);
	if (result) return 'xlsx';

  const rftList = ['rft'];
	result = rftList.find((item) => item === suffix);
	if (result) return 'rft';

  const xmlList = ['xml'];
	result = xmlList.find((item) => item === suffix);
	if (result) return 'xml';

  const htmlList = ['xhtml', 'html', 'htm'];
	result = htmlList.find((item) => item === suffix);
	if (result) return 'html';

  const jpgList = ['jpg', 'jpeg', 'jpe', 'jfif', 'jfif-tbnl'];
	result = jpgList.find((item) => item === suffix);
	if (result) return 'jpeg';

  const pngList = ['png'];
	result = pngList.find((item) => item === suffix);
	if (result) return 'png';

  const gifList = ['gif'];
	result = gifList.find((item) => item === suffix);
	if (result) return 'gif';

  const bmpList = ['bmp'];
	result = bmpList.find((item) => item === suffix);
	if (result) return 'bmp';

  const svgList = ['svg'];
	result = svgList.find((item) => item === suffix);
	if (result) return 'svg';

  const webpList = ['webp'];
	result = webpList.find((item) => item === suffix);
	if (result) return 'webp';

  const tiffList = ['tif', 'tiff'];
	result = tiffList.find((item) => item === suffix);
  if (result) return 'tiff';
  
  const txtList = ['txt'];
	result = txtList.find((item) => item === suffix);
  if (result) return 'txt';
  
  const cssList = ['css', 'scss', 'sass', 'less', 'style'];
	result = cssList.find((item) => item === suffix);
  if (result) return 'css';
  
  const jsList = ['js', 'ts'];
	result = jsList.find((item) => item === suffix);
  if (result) return 'js';
  
  const jsonList = ['json'];
	result = jsonList.find((item) => item === suffix);
  if (result) return 'json';
  
  const zipList = ['zip'];
	result = zipList.find((item) => item === suffix);
	if (result) return 'zip';

  const rarList = ['rar'];
	result = rarList.find((item) => item === suffix);
	if (result) return 'rar';

  const zip7List = ['7z'];
	result = zip7List.find((item) => item === suffix);
  if (result) return '7-zip';
  
  const tarList = ['tar'];
	result = tarList.find((item) => item === suffix);
  if (result) return 'tar';
  
  const gzList = ['gz'];
	result = gzList.find((item) => item === suffix);
  if (result) return 'gzip';
  
  const bz2List = ['bz2'];
	result = bz2List.find((item) => item === suffix);
	if (result) return 'bzip2';

  const mp3List = ['mp3'];
	result = mp3List.find((item) => item === suffix);
  if (result) return 'mp3';
  
  const wavList = ['wav'];
	result = wavList.find((item) => item === suffix);
  if (result) return 'wav';
  
  const aacList = ['aac'];
	result = aacList.find((item) => item === suffix);
  if (result) return 'aac';
  
  const mp4List = ['mp4', 'm4v'];
	result = mp4List.find((item) => item === suffix);
  if (result) return 'mp4';
  
  const aviList = ['avi', 'mov', 'webp'];
	result = aviList.find((item) => item === suffix);
	if (result) return 'video';

	return 'blob';
}