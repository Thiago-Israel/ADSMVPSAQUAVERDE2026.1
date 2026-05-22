import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooterMain from "../components/SiteFooterMain";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, Mountain, Clock, MapPin, AlertCircle, Leaf, Droplets, TreePine } from "lucide-react";

export default function Trilhas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dificuldade, setDificuldade] = useState("todas");

  const trilhas = [
    {
      nome: "Trilha da Cachoeira do Sana",
      imagem: "https://images.unsplash.com/photo-1769517250374-8a332ee87a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBicmF6aWwlMjBncmVlbnxlbnwxfHx8fDE3NzkzNzMwODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      dificuldade: "Média",
      duracao: "3-4 horas",
      distancia: "8 km",
      horario: "08:00 - 16:00",
      descricao: "Trilha pela Mata Atlântica com destino a uma bela cachoeira natural.",
    },
    {
      nome: "Trilha do Morro do Mirante",
      imagem: "https://images.unsplash.com/photo-1603475429038-44361bcde123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRyYWlsJTIwaGlraW5nJTIwZm9yZXN0fGVufDF8fHx8MTc3OTM3MzA4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      dificuldade: "Difícil",
      duracao: "5-6 horas",
      distancia: "12 km",
      horario: "07:00 - 15:00",
      descricao: "Caminhada desafiadora com vista panorâmica de Saquarema e da costa.",
    },
    {
      nome: "Trilha da Restinga",
      imagem: "https://images.unsplash.com/photo-1555363089-ff00193f476a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwcGFyayUyMGJlYWNoJTIwZHVuZXMlMjBicmF6aWx8ZW58MXx8fHwxNzc5MzczMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      dificuldade: "Fácil",
      duracao: "1-2 horas",
      distancia: "3 km",
      horario: "08:00 - 17:00",
      descricao: "Caminhada leve pelo ecossistema de restinga com observação de flora nativa.",
    },
    {
      nome: "Trilha do Rio Verde",
      imagem: "https://images.unsplash.com/photo-1550087306-59370889b124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjByaXZlciUyMHN0cmVhbSUyMG5hdHVyYWx8ZW58MXx8fHwxNzc5MzczMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      dificuldade: "Fácil",
      duracao: "2-3 horas",
      distancia: "5 km",
      horario: "08:00 - 16:00",
      descricao: "Percurso margeando o rio com diversas piscinas naturais para banho.",
    },
    {
      nome: "Trilha da Reserva Jacarepiá",
      imagem: "https://images.unsplash.com/photo-1764552849574-07875f65c707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29sb2dpY2FsJTIwcmVzZXJ2ZSUyMHdldGxhbmQlMjBiaXJkc3xlbnwxfHx8fDE3NzkzNzMwODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      dificuldade: "Média",
      duracao: "3 horas",
      distancia: "6 km",
      horario: "07:00 - 16:00",
      descricao: "Trilha na reserva ecológica ideal para observação de aves e fauna.",
    },
    {
      nome: "Trilha Praia a Praia",
      imagem: "https://images.unsplash.com/photo-1665676248528-46312d500376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3VucmlzZSUyMGJyYXppbHxlbnwxfHx8fDE3NzkzNzMwODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      dificuldade: "Média",
      duracao: "4 horas",
      distancia: "10 km",
      horario: "08:00 - 17:00",
      descricao: "Caminhada conectando diferentes praias com paisagens deslumbrantes.",
    },
  ];

  const dicas = [
    {
      icon: Droplets,
      titulo: "Leve Água",
      descricao: "Mantenha-se hidratado durante toda a trilha",
    },
    {
      icon: Leaf,
      titulo: "Não Deixe Lixo",
      descricao: "Preserve a natureza, leve seu lixo de volta",
    },
    {
      icon: TreePine,
      titulo: "Respeite a Flora",
      descricao: "Não retire plantas ou danifique a vegetação",
    },
    {
      icon: Mountain,
      titulo: "Siga as Trilhas",
      descricao: "Não saia dos caminhos marcados",
    },
  ];

  const getDificuldadeColor = (dif: string) => {
    switch (dif) {
      case "Fácil":
        return "bg-green-500";
      case "Média":
        return "bg-yellow-500";
      case "Difícil":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const trilhasFiltradas = trilhas.filter((trilha) => {
    const matchSearch = trilha.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       trilha.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDificuldade = dificuldade === "todas" || trilha.dificuldade === dificuldade;
    return matchSearch && matchDificuldade;
  });

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <SiteHeader />

      {/* Header da Página */}
      <section className="bg-[#2E7D32] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trilhas Ecológicas
            </h1>
            <p className="text-xl text-white/90">
              Explore as belezas naturais de Saquarema através de trilhas seguras e bem sinalizadas
            </p>
          </div>
        </div>
      </section>

      {/* Filtros e Pesquisa */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar trilhas..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={dificuldade} onValueChange={setDificuldade}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Dificuldade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas</SelectItem>
                <SelectItem value="Fácil">Fácil</SelectItem>
                <SelectItem value="Média">Média</SelectItem>
                <SelectItem value="Difícil">Difícil</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Grid de Trilhas */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trilhasFiltradas.map((trilha, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={trilha.imagem}
                    alt={trilha.nome}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 right-4 ${getDificuldadeColor(trilha.dificuldade)} text-white border-0`}>
                    {trilha.dificuldade}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-[#2E7D32]">{trilha.nome}</CardTitle>
                  <CardDescription>{trilha.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-[#2E7D32]" />
                      <span>Duração: {trilha.duracao}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-[#2E7D32]" />
                      <span>Distância: {trilha.distancia}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mountain className="h-4 w-4 text-[#2E7D32]" />
                      <span>Horário: {trilha.horario}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#2E7D32] hover:bg-[#1B5E20]">
                    Ver Detalhes
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {trilhasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-lg text-gray-600">Nenhuma trilha encontrada com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </section>

      {/* Dicas Ambientais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2E7D32' }}>
              Dicas de Preservação
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ajude a manter nossas trilhas e áreas naturais preservadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {dicas.map((dica, index) => {
              const Icon = dica.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-[#66BB6A]/10">
                        <Icon className="h-8 w-8 text-[#2E7D32]" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-[#2E7D32]">{dica.titulo}</CardTitle>
                    <CardDescription>{dica.descricao}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Regras de Preservação */}
          <Card className="mt-12 border-[#2E7D32] max-w-4xl mx-auto">
            <CardHeader className="bg-[#2E7D32] text-white">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6" />
                Regras Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2E7D32] font-bold">•</span>
                  <span>Não faça fogueiras ou use fogo nas trilhas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E7D32] font-bold">•</span>
                  <span>Não alimente animais silvestres</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E7D32] font-bold">•</span>
                  <span>Evite ruídos excessivos que perturbem a fauna</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E7D32] font-bold">•</span>
                  <span>Use protetor solar biodegradável e repelente natural</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E7D32] font-bold">•</span>
                  <span>Mantenha distância segura de animais selvagens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E7D32] font-bold">•</span>
                  <span>Respeite os horários de funcionamento das trilhas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <SiteFooterMain />
    </div>
  );
}
