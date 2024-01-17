import { useState } from "react";

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleDivClick = () => {
        // Trigger click on the hidden file input directly
        document.getElementById('file-input').click();
    };

    const handleUpload = async () => {
        try {
            if (!selectedFile) {
                console.error('Please select an image.');
                return;
            }

            // Create a FormData object and append the file to it
            const formData = new FormData();
            formData.append('image', selectedFile);

            // Make a POST request to the backend endpoint with the FormData

            const response = await fetch('http://localhost:5000/detection/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    // Make sure to set the Content-Type header to multipart/form-data
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle the response from the server
            console.log('Image uploaded successfully:', response.data);

        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded cursor-pointer transition duration-300 hover:border-blue-500">

            {
                selectedFile
                    ? 'File Selected'
                    : <>
                        <label
                            className="text-center font-semibold text-[18px] m-2"
                        >Choose Image for Upload </label>
                        <div
                            className="relative border-dashed border-2 border-gray-300 p-4 rounded-md cursor-pointer hover:border-blue-500"
                            onClick={handleDivClick}
                        >

                            <input
                                type="file"
                                id="file-input"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                            <div className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="mx-auto h-12 w-12 text-gray-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                <p className="mt-1 text-sm text-gray-600">Click or drag to upload</p>
                            </div>
                        </div>
                    </>
            }

            <button
                onClick={handleUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Upload
            </button>
        </div>
    );
};

export default ImageUpload;
