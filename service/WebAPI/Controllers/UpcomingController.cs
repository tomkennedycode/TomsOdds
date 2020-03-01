using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Domain.Models;
using WebAPI.Domain.Services;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UpcomingController : ControllerBase
    {

        private readonly ILogger<UpcomingController> _logger;
        private readonly IUpcomingService _upcomingService;

        public UpcomingController(ILogger<UpcomingController> logger, IUpcomingService upcomingService)
        {
            _logger = logger;
            _upcomingService = upcomingService;
        }

        [HttpGet]
        public List<Upcoming> GetUpcomingMatches()
        {
            var upcomingMatches = _upcomingService.GetUpcomingMatches();
            return upcomingMatches;
        }
    }
}
