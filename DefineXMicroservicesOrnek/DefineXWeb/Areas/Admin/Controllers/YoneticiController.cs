﻿using Microsoft.AspNetCore.Mvc;

namespace DefineXWeb.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class YoneticiController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Git()
        {
            return View();
        }

        public IActionResult AdminLogout()
        {
            return SignOut("Cookies", "oidc");
        }


    }
}
