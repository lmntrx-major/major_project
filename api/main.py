import uvicorn
from fastapi import FastAPI, UploadFile, File
import tensorflow as tf
import os


# Path to model location
x: list[str] = ["model", "saved_models", "classification.keras"]
model_rel_path: str = os.sep.join(x)
parent_dir_path: str = os.path.abspath(os.path.join(os.getcwd(), os.pardir))
model_path: str = os.path.join(parent_dir_path, model_rel_path)
# print(model_path)

# Loading model
model = tf.keras.models.load_model(model_path)
# model.summary()

app = FastAPI()

@app.post("/predict-image")
async def predict(file: UploadFile = File(...)):
    image = await file.read()
    image = tf.image.decode_jpeg(image, channels=3)
    image = tf.image.resize(image, [224, 224], method=tf.image.ResizeMethod.BILINEAR, antialias=True)
    image = tf.image.convert_image_dtype(image, tf.float32)
    image_batch = tf.expand_dims(image, 0)

    result = tf.argmax(tf.nn.softmax(model.predict(image_batch)))

    return {"Prediction": result.numpy().tolist()[0]}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)