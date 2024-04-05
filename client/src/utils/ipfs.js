export default async function uploadFile(name, file) {
  const pinataURL = "https://api.pinata.cloud/pinning/pinFileToIPFS";

  try {
    const formData = new FormData();
    const metadata = JSON.stringify({
      name: `${name}-${Date.now()}`,
    });
    const options = JSON.stringify({
      cidVersion: 0,
    });

    formData.append("file", file);
    formData.append("pinataMetadata", metadata);
    formData.append("pinataOptions", options);

    const res = await fetch(pinataURL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
      },
      body: formData,
    });
    const resData = await res.json();
    console.log(resData);
    return resData.IpfsHash;
  } catch (error) {
    console.log(error);
    return null;
  }
}
