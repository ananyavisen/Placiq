from sentence_transformers import SentenceTransformer
import torch


MODEL_NAME = "sentence-transformers/all-mpnet-base-v2"

print("Loading MPNet...")

model = SentenceTransformer(MODEL_NAME)

model.eval()

print("MPNet loaded!")


def extract_text_embedding(text):

    with torch.no_grad():

        embedding = model.encode(
            text,
            convert_to_tensor=True,
            normalize_embeddings=False
        )

    return embedding.cpu().numpy()