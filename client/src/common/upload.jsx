import axios from "axios";

export const uploadImage = async (img) => {
    let imgUrl = null;

    const formData = new FormData();
    formData.append("image", img);
    formData.append("type", "file");
    formData.append("title", "Simple upload");
    formData.append("description", "This is a simple image upload in Imgur");

    try {
        console.log("Starting image upload...");
        console.log("Form data:", formData);

        const response = await axios.post("https://api.imgur.com/3/image", formData, {
            headers: {
                'Authorization': `Client-ID ebbe576f324f3ff`
            }
        });

        console.log("Response from Imgur:", response);

        if (response.data.success) {
            imgUrl = response.data.data.link;
            console.log("Image uploaded successfully:", imgUrl);
        } else {
            console.log("Upload was not successful:", response.data);
        }
    } catch (error) {
        console.error("Failed to upload image:", error.response ? error.response.data : error.message);
    }

    return imgUrl;
};
