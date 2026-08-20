from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    email: str
    password: str

users_db = []

@app.post("/signup")
def signup(user: User):
    users_db.append(user)
    return {"status": "OK", "message": "Compte créé"}

@app.post("/login")
def login(user: User):
    for u in users_db:
        if u.email == user.email and u.password == user.password:
            return {"status": "OK", "message": "Connexion réussie"}
    return {"status": "REFUSE", "message": "Email ou mot de passe incorrect"}
