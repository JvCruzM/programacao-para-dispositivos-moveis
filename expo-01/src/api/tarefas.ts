import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com",
  headers: {
    "X-Parse-Application-Id":
      "JYknWGUo6qYhDc3g8hvgQUvITZyz4KFAUttpAxVF",
    "X-Parse-REST-API-Key":
      "uyhRDxFMCkxfy4hBJavBNlu48oSRdLEmxxZGrog4",
  },
});

const tarefaURL = "/classes/Tarefa";
const headerJson = { "Content-Type": "application/json" };

export type Tarefa = {
  objectId: string;
  descricao: string;
  concluida: boolean;
};

export async function getTarefas(): Promise<Tarefa[]> {
  const response = await instance.get<{ results: Tarefa[] }>(tarefaURL);
  return response.data?.results ?? [];
}

export async function addTarefa(descricao: string) {
  const response = await instance.post(
    tarefaURL,
    {
      descricao,
    },
    {
      headers: headerJson,
    },
  );

  return response.data;
}

export async function updateTarefa(tarefa: Tarefa) {
  const response = await instance.put(
    `${tarefaURL}/${tarefa.objectId}`,
    {
      descricao: tarefa.descricao,
      concluida: tarefa.concluida,
    },
    {
      headers: headerJson,
    },
  );

  return response.data;
}

export async function deleteTarefa(tarefa: Tarefa) {
  const response = await instance.delete(
    `${tarefaURL}/${tarefa.objectId}`,
  );

  return response.data;
}