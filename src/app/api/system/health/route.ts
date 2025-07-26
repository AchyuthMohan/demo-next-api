export async function GET(request: Request) {
    const response = {
        status: "OK",
    }
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } 