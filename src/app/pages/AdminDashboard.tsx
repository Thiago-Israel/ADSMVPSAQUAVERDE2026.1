import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { 
  Leaf, 
  LogOut, 
  Calendar, 
  Users, 
  TrendingUp, 
  MapPin,
  Plus,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Dados mock para gráficos
  const visitasData = [
    { mes: "Jan", visitas: 240 },
    { mes: "Fev", visitas: 310 },
    { mes: "Mar", visitas: 280 },
    { mes: "Abr", visitas: 390 },
    { mes: "Mai", visitas: 450 },
  ];

  const eventosData = [
    { nome: "Trilhas", total: 45 },
    { nome: "Palestras", total: 28 },
    { nome: "Limpeza", total: 15 },
    { nome: "Obs. Aves", total: 32 },
  ];

  const eventos = [
    { id: 1, titulo: "Trilha Guiada - Cachoeira", data: "28/05/2026", vagas: 20, status: "Ativo" },
    { id: 2, titulo: "Mutirão Praia de Itaúna", data: "02/06/2026", vagas: 50, status: "Ativo" },
    { id: 3, titulo: "Palestra Biodiversidade", data: "10/06/2026", vagas: 100, status: "Ativo" },
    { id: 4, titulo: "Observação de Aves", data: "15/06/2026", vagas: 15, status: "Ativo" },
  ];

  const handleLogout = () => {
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Header */}
      <header className="bg-[#2E7D32] text-white shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Leaf className="h-6 w-6 text-[#2E7D32]" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Painel Administrativo</h1>
                <p className="text-sm text-white/80">Saquarema Verde</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="eventos">Eventos</TabsTrigger>
            <TabsTrigger value="trilhas">Trilhas</TabsTrigger>
            <TabsTrigger value="cadastro">Novo Evento</TabsTrigger>
          </TabsList>

          {/* Visão Geral */}
          <TabsContent value="overview" className="space-y-6">
            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Eventos Ativos</CardTitle>
                  <Calendar className="h-4 w-4 text-[#2E7D32]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#2E7D32]">24</div>
                  <p className="text-xs text-gray-500 mt-1">+3 este mês</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Participantes</CardTitle>
                  <Users className="h-4 w-4 text-[#0288D1]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#0288D1]">1,247</div>
                  <p className="text-xs text-gray-500 mt-1">+180 este mês</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Trilhas Disponíveis</CardTitle>
                  <MapPin className="h-4 w-4 text-[#66BB6A]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#66BB6A]">12</div>
                  <p className="text-xs text-gray-500 mt-1">Em 3 reservas</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Ocupação</CardTitle>
                  <TrendingUp className="h-4 w-4 text-[#2E7D32]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#2E7D32]">87%</div>
                  <p className="text-xs text-gray-500 mt-1">+12% vs mês anterior</p>
                </CardContent>
              </Card>
            </div>

            {/* Gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Visitas Mensais</CardTitle>
                  <CardDescription>Total de participantes por mês</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={visitasData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="visitas" stroke="#2E7D32" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eventos por Categoria</CardTitle>
                  <CardDescription>Distribuição de eventos realizados</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={eventosData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="nome" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="total" fill="#66BB6A" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Próximos Eventos */}
            <Card>
              <CardHeader>
                <CardTitle>Próximos Eventos</CardTitle>
                <CardDescription>Eventos programados para as próximas semanas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eventos.slice(0, 3).map((evento) => (
                    <div key={evento.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2E7D32]/10">
                          <Calendar className="h-6 w-6 text-[#2E7D32]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#2E7D32]">{evento.titulo}</h4>
                          <p className="text-sm text-gray-500">{evento.data} - {evento.vagas} vagas</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500 text-white">{evento.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gerenciamento de Eventos */}
          <TabsContent value="eventos" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Gerenciamento de Eventos</CardTitle>
                    <CardDescription>Visualize e gerencie todos os eventos cadastrados</CardDescription>
                  </div>
                  <Button className="bg-[#2E7D32] hover:bg-[#1B5E20]" onClick={() => setActiveTab("cadastro")}>
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Evento
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Vagas</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {eventos.map((evento) => (
                      <TableRow key={evento.id}>
                        <TableCell className="font-medium">{evento.titulo}</TableCell>
                        <TableCell>{evento.data}</TableCell>
                        <TableCell>{evento.vagas}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500 text-white">{evento.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gerenciamento de Trilhas */}
          <TabsContent value="trilhas" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Gerenciamento de Trilhas</CardTitle>
                    <CardDescription>Gerencie horários e disponibilidade das trilhas</CardDescription>
                  </div>
                  <Button className="bg-[#2E7D32] hover:bg-[#1B5E20]">
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Trilha
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { nome: "Trilha da Cachoeira", status: "Aberta", horario: "08:00 - 16:00" },
                    { nome: "Trilha do Mirante", status: "Aberta", horario: "07:00 - 15:00" },
                    { nome: "Trilha da Restinga", status: "Manutenção", horario: "Fechada" },
                    { nome: "Trilha do Rio Verde", status: "Aberta", horario: "08:00 - 16:00" },
                  ].map((trilha, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{trilha.nome}</CardTitle>
                          <Badge className={trilha.status === "Aberta" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}>
                            {trilha.status}
                          </Badge>
                        </div>
                        <CardDescription>Horário: {trilha.horario}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="h-4 w-4 mr-2" />
                            Editar
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            Visualizar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cadastro de Novos Eventos */}
          <TabsContent value="cadastro" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cadastrar Novo Evento</CardTitle>
                <CardDescription>Preencha os dados do evento ambiental</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="titulo">Título do Evento</Label>
                      <Input id="titulo" placeholder="Ex: Trilha Guiada..." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="data">Data</Label>
                      <Input id="data" type="date" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="horario">Horário</Label>
                      <Input id="horario" type="time" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vagas">Número de Vagas</Label>
                      <Input id="vagas" type="number" placeholder="Ex: 20" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="local">Local</Label>
                      <Input id="local" placeholder="Ex: Parque da Costa do Sol" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="categoria">Categoria</Label>
                      <Input id="categoria" placeholder="Ex: Trilha, Palestra..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descricao">Descrição</Label>
                    <Textarea
                      id="descricao"
                      placeholder="Descreva o evento..."
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-[#2E7D32] hover:bg-[#1B5E20]">
                      Cadastrar Evento
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setActiveTab("eventos")}>
                      Cancelar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
