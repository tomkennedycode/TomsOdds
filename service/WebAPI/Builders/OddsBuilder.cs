using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using WebAPI.Domain.Models;
using WebAPI.Domain.Builders;
using Microsoft.Extensions.Configuration;

namespace WebAPI.Services
{
    public class OddsBuilder : IOddsBuilder
    {
        IConfiguration _config;

        public OddsBuilder(IConfiguration config){
            _config = config;
        }

        public async Task<List<OddsAPIData>> GetFullOdds()
        {
            string apiKey = _config.GetSection("APISettings").GetSection("APIKeyAllFootball").Value;

            using var client = new HttpClient();
            var result = await client.GetAsync(apiKey);

            result.EnsureSuccessStatusCode();

            string responseBody = await result.Content.ReadAsStringAsync();
            JObject data = JObject.Parse(responseBody);
            var token = (JArray) data.SelectToken("data");
            var list = new List<OddsAPIData>();

            foreach (var item in token) {
                list.Add(item.ToObject<OddsAPIData>());
            }

            return list;
        }
    }
}