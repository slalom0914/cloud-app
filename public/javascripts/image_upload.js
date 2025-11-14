// 클래스 선언
class ImageUploader {
  //함수
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'gjjjqtxw');//
    const result = await fetch(//비동기처리 지원 -> axios
      'https://api.cloudinary.com/v1_1/dfxci8qyg/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }  
}
export default ImageUploader;