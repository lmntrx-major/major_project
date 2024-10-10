from fastapi import FastAPI, UploadFile
import tensorflow as tf

app = FastAPI()

model = tf.keras.models.load_model("D:\\major_project_1\\models\\mnv3large.keras")
# async def preprocess_image(image):
#     image = tf.image.resize(image, [224, 224], method=tf.image.ResizeMethod.BILINEAR, antialias=True)
#     return image
#
# async def predict(image):
#     return
#
#
#
#
# @app.post("/infer/")
# async def create_upload_file(file: UploadFile):
#
#
#     return {"filename": file.filename}

