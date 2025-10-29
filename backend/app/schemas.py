from pydantic import BaseModel, Field

class TodoBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=140)

class TodoCreate(TodoBase):
    pass

class TodoUpdate(BaseModel):
    title: str | None = Field(None, min_length=1, max_length=140)
    done: bool | None = None

class TodoOut(TodoBase):
    id: int
    done: bool

    class Config:
        orm_mode = True
