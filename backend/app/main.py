from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from .routers import todos
from .core.cors import setup_cors
from .db import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Todo API")
setup_cors(app)
app.include_router(todos.router)


@app.get("/", include_in_schema=False)
def root():
	"""Redirect root to Swagger UI at /docs."""
	return RedirectResponse(url="/docs")
