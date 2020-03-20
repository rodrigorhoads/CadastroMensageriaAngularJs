using CadastroMensageriaAngularJs.Data;
using CadastroMensageriaAngularJs.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CadastroMensageriaAngularJs.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult CriarMensageria(Mensageria mensagem)
        {
            CadastroMensageriaContext context = new CadastroMensageriaContext();

            if (mensagem.IdMensageria > 0 )
            {
                mensagem.Template = null;
                mensagem.DataCadastro = DateTime.Now;
                context.Entry(mensagem).State = EntityState.Modified;
                context.SaveChanges();
                return View("Index");
            }

            mensagem.DataCadastro = DateTime.Now;
            mensagem.Racf = "Usuario Teste";

            context.Mensagerias.Add(mensagem);
            context.SaveChanges();
            return View("Index");
        }

        public ActionResult FiltrarDadosTemplate()
        {
            CadastroMensageriaContext context = new CadastroMensageriaContext();
            List<MensageriaTemplate> templates = context.MensageriaTemplates.ToList();

            return Json(templates, JsonRequestBehavior.AllowGet);
        }

        public ActionResult FiltrarDadosMensageria()
        {
            CadastroMensageriaContext context = new CadastroMensageriaContext();
            List<Mensageria> mensagerias = context.Mensagerias.Include("Template").ToList();

            return Json(mensagerias, JsonRequestBehavior.AllowGet);
        }

        public ActionResult CriarMensageriaTemplate(MensageriaTemplate template,HttpPostedFileBase file=null)
        {
            CadastroMensageriaContext context = new CadastroMensageriaContext();

            if (template.IdMensageriaTemplate > 0)
            {
                context.Entry(template).State = EntityState.Modified;
                context.SaveChanges();
                return View("Index");
            }

            template.DataCadastro = DateTime.Now;
            template.Racf = "Usuario Teste";
            template.Caminho = "//swcopt/templates/index.html";

            context.MensageriaTemplates.Add(template);
            context.SaveChanges();
            return View("Index");
        }
    }
}