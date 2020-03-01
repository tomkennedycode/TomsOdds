using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Domain.Models;
using WebAPI.Domain.Services;

namespace WebAPI.Services
{
    public class UpcomingService : IUpcomingService
    {
        public List<Upcoming> GetUpcomingMatches()
        {
            List<Upcoming> upcomingMatches = new List<Upcoming>();

            return upcomingMatches;
        }
    }
}