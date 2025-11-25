from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title='Printelligence Mock API')

class QuoteRequest(BaseModel):
    product: str
    quantity: int

@app.get('/health')
def health():
    return {'status':'ok'}

@app.post('/quote')
def quote(req: QuoteRequest):
    base = 850
    q = req.quantity
    if q >= 1000:
        base *= 0.6
    elif q >= 500:
        base *= 0.72
    elif q >= 250:
        base *= 0.84
    return {'product':req.product, 'quantity':q, 'estimate': round(base)}
