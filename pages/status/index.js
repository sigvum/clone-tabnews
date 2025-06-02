import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <UpdatedAt />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let UpdatedAtText = "Carregando...";

  let databaseStatusInfo = "Carregando...";

  if (!isLoading && data) {
    UpdatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  if (!isLoading && data) {
    databaseStatusInfo = (
      <>
        <div>Versão: {data.dependencies.database.version}</div>
        <div>Max. conexões: {data.dependencies.database.max_connections}</div>
        <div>
          Conexões ativas: {data.dependencies.database.opened_connections}
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Status</h1>
      </div>
      <div>Última atualização: {UpdatedAtText}</div>
      <div>
        <h1>Database</h1>

        {databaseStatusInfo}
      </div>
    </>
  );
}
