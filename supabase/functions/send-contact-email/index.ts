import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

serve(async (req) => {
  // Configuração CORS completa
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET, PUT, DELETE",
    "Access-Control-Max-Age": "86400",
  };

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    });
  }

  try {
    const body = await req.json();
    const { name, email, whatsapp, subject, message } = body;

    // Verificar se todos os campos obrigatórios existem
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios faltando" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY não configurada" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "tobias.teles@gmail.com",
        subject: `Novo contato: ${subject}`,
        html: `
          <h2>Nova mensagem recebida</h2>
          <p><b>Nome:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>WhatsApp:</b> ${whatsapp || "não informado"}</p>
          <p><b>Mensagem:</b> ${message}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Erro do Resend:", errorText);
      return new Response(
        JSON.stringify({ error: "Falha ao enviar e-mail", details: errorText }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const result = await emailResponse.json();
    console.log("E-mail enviado com sucesso:", result);

    return new Response(
      JSON.stringify({ success: true, data: result }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Erro na função:", err);
    return new Response(
      JSON.stringify({ error: "Falha ao processar requisição" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});