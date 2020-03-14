using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Domain.Models;
using WebAPI.Domain.Services;
using WebAPI.Domain.Builders;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UpcomingController : ControllerBase
    {
        private readonly ILogger<UpcomingController> _logger;
        private readonly IUpcomingService _upcomingService;
        private readonly IOddsBuilder _oddsBuilder;

        public UpcomingController(ILogger<UpcomingController> logger, IUpcomingService upcomingService, IOddsBuilder oddsBuilder)
        {
            _logger = logger;
            _upcomingService = upcomingService;
            _oddsBuilder = oddsBuilder;
        }

        [HttpGet]
        public List<Upcoming> GetUpcomingMatches()
        {
            List<OddsAPIData> data = Task.Run(() => _oddsBuilder.GetFullOdds()).Result;

            var upcomingMatches = _upcomingService.GetUpcomingMatches(data);
            return upcomingMatches;
        }
    }
}
