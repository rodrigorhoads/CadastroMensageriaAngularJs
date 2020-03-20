using CadastroMensageriaAngularJs.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CadastroMensageriaAngularJs.Data
{
    public class CadastroMensageriaContext:DbContext
    {
        public CadastroMensageriaContext():base("DefaultConnection"){}

        public DbSet<Mensageria> Mensagerias { get; set; }

        public DbSet<MensageriaTemplate> MensageriaTemplates { get; set; }

    }
}