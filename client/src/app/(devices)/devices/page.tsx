"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function DevicesPage() {
  const [status] = useState("Conectado");

  return (
    <div className="min-h-screen w-full bg-white p-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-black">
            Tela de monitoramento - <span className="text-gray-800">Dispositivos</span>
          </h1>
          <p className="text-gray-700">
            Visão rápida das informações do ESP32 e do Raspberry
          </p>
        </div>
      </div>

      {/* Dispositivos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ESP32 */}
        <Card className="bg-[#F3F4F6] border-2 border-gray-300 rounded-2xl shadow-lg text-black">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">ESP32</h2>
              <Badge className="bg-yellow-400 text-black">
                Dispositivo microcontrolador
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="bg-white px-3 py-1 rounded-lg shadow text-sm">
                <p className="font-semibold text-black flex items-center justify-between">
                  Processamento
                  <span className="text-gray-700 text-sm">Uso: 15%</span>
                </p>
                <p className="text-gray-700 text-sm">ESP32-WROOM @ 240Mhz</p>
              </div>

              <div className="bg-white px-3 py-1 rounded-lg shadow text-sm">
                <p className="font-semibold text-black flex items-center justify-between">
                  Espaço Disponível
                  <span className="text-gray-700 text-sm">30%</span>
                </p>
                <p className="text-gray-700 text-sm">
                  1.2 MB livre / 4 MB total
                </p>
              </div>

              <div>
                <p className="font-semibold text-black mb-2">Pinos disponíveis</p>
                <div className="grid grid-cols-2 gap-2">
                  <span className="bg-white px-3 py-1 rounded-lg shadow text-sm">GPIO 0 - ADC / INPUT</span>
                  <span className="bg-white px-3 py-1 rounded-lg shadow text-sm">GPIO 1 - OUTPUT</span>
                  <span className="bg-white px-3 py-1 rounded-lg shadow text-sm">GPIO 2 - ADC / INPUT</span>
                  <span className="bg-white px-3 py-1 rounded-lg shadow text-sm">GPIO 3 - ADC / INPUT</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-300">
                <p className="text-gray-700 text-sm">
                  ID do dispositivo:{" "}
                  <span className="font-medium text-black">esp32-12ab34cd</span>
                </p>
                <p className="text-gray-600 text-sm">Última leitura: há 2 min</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Raspberry */}
        <Card className="bg-[#F3F4F6] border-2 border-gray-300 rounded-2xl shadow-lg text-black">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">Raspberry</h2>
              <Badge className="bg-yellow-400 text-black">Dispositivo SBC</Badge>
            </div>

            <div className="space-y-3">
              <div className=" bg-white px-3 py-1 rounded-lg shadow text-sm">
                <p className="font-semibold text-black flex items-center justify-between">
                  Processamento
                  <span className="text-gray-700 text-sm">Uso CPU: 22%</span>
                </p>
                <p className="text-gray-700 text-sm">Raspberry Pi 4 - 4x1.5Ghz</p>
              </div>

              <div className="bg-white px-3 py-1 rounded-lg shadow text-sm">
                <p className="font-semibold text-black flex items-center justify-between">
                  Espaço Disponível
                  <span className="text-gray-700 text-sm">38%</span>
                </p>
                <p className="text-gray-700 text-sm">
                  12 MB livre / 32 MB total
                </p>
              </div>

              <div>
                <p className="font-semibold text-black mb-2">Containers (Docker)</p>
                <div className="space-y-1">
                  <div className="flex justify-between bg-white px-3 py-1 rounded-lg shadow text-sm">
                    <span>app-web</span>
                    <span className="text-green-600 font-medium">(running)</span>
                  </div>
                  <div className="flex justify-between bg-white px-3 py-1 rounded-lg shadow text-sm">
                    <span>db-postgres</span>
                    <span className="text-red-600 font-medium">(stopped)</span>
                  </div>
                  <div className="flex justify-between bg-white px-3 py-1 rounded-lg shadow text-sm">
                    <span>apweb</span>
                    <span className="text-green-600 font-medium">(running)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-300">
                <p className="text-gray-700 text-sm">
                  ID do dispositivo:{" "}
                  <span className="font-medium text-black">raspi-99cc88dd</span>
                </p>
                <p className="text-gray-600 text-sm">Uptime: 3d 4h</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
