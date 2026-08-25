const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function predictLoan(data) {
    const response = await fetch(`${API_BASE_URL}/predict`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(date),
    });

    if(!response.ok){
        const error=await response.json().catch(()=>({}));

        throw new Error(error.detail || "Prediction request failed");
    }

    return response.json()
}