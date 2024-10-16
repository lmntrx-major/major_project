import React, { useState } from 'react';

function Predict() {
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);
  const [result, setResult] = useState('');

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImg(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image clear
  const handleClear = () => {
    setImage(null);
    setResult('');
    setImg(null);
  };

  // Handle prediction (replace with actual prediction logic)
  async function handlePredict() {
    const api_url = "http://localhost:8000/predict-image";
    const formData = new FormData();
    formData.append("file", img);

    try {
      const response = await fetch(api_url, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      setResult(result.Prediction);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed!");
    }
  }

  return (
    <div style={styles.container}>
      <button onClick={handleClear} style={styles.clearButton}>Clear</button>
      
      <div style={styles.imageContainer}>
        {image ? <img src={image} alt="Uploaded" style={styles.image} /> : <div style={styles.placeholder}>Image</div>}
      </div>

      <input type="file" accept="image/*" onChange={handleImageUpload} style={styles.uploadButton} />

      <div style={styles.predictSection}>
        <button onClick={handlePredict} style={styles.predictButton}>Predict</button>
        <br />
        <span style={styles.result}>{result}</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  clearButton: {
    marginBottom: '20px',
    padding: '10px 20px',
  },
  imageContainer: {
    width: '300px',
    height: '300px',
    margin: 'auto',
    border: '2px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  placeholder: {
    fontSize: '20px',
    color: '#ccc',
  },
  uploadButton: {
    marginTop: '20px',
  },
  predictSection: {
    marginTop: '20px',
  },
  predictButton: {
    padding: '10px 20px',
  },
  result: {
    marginLeft: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Predict;
