using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PandL_Test.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CheckDivisibility(int number)
        {
            string answer = "It's divisible by ";
            bool three = false, five = false;

            if (IsDivisible(number, 3))
            {
                answer += "3";

                three = true;
            }

            if (IsDivisible(number, 5))
            {
                if (three)
                {
                    answer += " and 5";
                }
                else
                {
                    answer += "5";
                }

                five = true;
            }

            if (!three && !five)
            {
                answer += "none of them";
            }

            var returnValue = new { value = number, response = answer };

            return Json(returnValue, JsonRequestBehavior.AllowGet);
        }

        private bool IsDivisible(int number, int numberToDivideWith)
        {
            return number % numberToDivideWith == 0;
        }

    }
}
