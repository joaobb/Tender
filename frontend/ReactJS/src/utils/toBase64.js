const toBase64 = (file, withHeader = true) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    if (!withHeader) {
      reader.onload = () =>
        resolve(
          String(reader.result).replace(
            new RegExp('^data:image/(jpeg|jpg|png);base64,'),
            '',
          ),
        );
    } else {
      reader.onload = () => resolve(reader.result);
    }
    reader.onerror = (error) => reject(error);
  });

export default toBase64;
