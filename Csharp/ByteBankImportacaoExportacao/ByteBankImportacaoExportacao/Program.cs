﻿using ByteBankImportacaoExportacao.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.IO; // IO = Input e Output
using System.Globalization;

namespace ByteBankImportacaoExportacao 
{ 
    partial class Program 
    { 
        static void Main(string[] args) 
        {
            Console.WriteLine("Digite o seu nome:");
            var nome = Console.ReadLine();

            usarStreamDeEntrada();


            Console.WriteLine("Aplicação finalizada. . .");


            Console.ReadLine();
        }
    }
} 
 