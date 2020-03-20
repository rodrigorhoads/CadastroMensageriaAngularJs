using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CadastroMensageriaAngularJs.Models
{
    public class MensageriaTemplate
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdMensageriaTemplate { get; set; }

        public string Nome { get; set; }

        public bool Ativo { get; set; }

        public string Racf { get; set; }

        public DateTime DataCadastro { get; set; }

        public string Caminho { get; set; }

        [NotMapped]
        public HttpPostedFileBase Template { get; set; }        
    }
}