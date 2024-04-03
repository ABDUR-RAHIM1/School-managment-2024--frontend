export const UploadFIle = async (file) => { 
    const form = new FormData();
    form.append("image", file);

    try {
        const response = await fetch("https://api.imgbb.com/1/upload?key=862850e874b9b92bba3bbba84383b4dd", {
            method: "POST",
            body: form, // Use 'body' instead of 'data'
        });

        if (!response.ok) {
            throw new Error("Failed to upload image");
        }

        const data = await response.json();
        const imgUrl = data.data.display_url;
        return imgUrl

    } catch (error) {
        console.error("Error:", error);
    }
};