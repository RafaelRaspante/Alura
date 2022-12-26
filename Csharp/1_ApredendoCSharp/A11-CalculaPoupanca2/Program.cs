using System;

namespace A11_CalculaPoupanca2
{
    internal class Programa
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando o projeto 11");

            double valorInvestido = 1000;

            for (int contadorMes = 1; contadorMes <= 12; contadorMes++)
            {
                valorInvestido *= 1.005;
                Console.WriteLine(
                        "Após " + contadorMes +
                        " meses, você terá R$" + valorInvestido);
            }
            Console.ReadLine();
        }
    }
}