import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar';
import "./admin.css";

const GestionprofB = () => {
  return (
    <div>
      <Navbar />

      <div className="justify-content-end">
            <Link to="/registrarprof">
              <button className=" btnRe" type="button">
                <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2az08TQRTH9+SPg0YTFW96NAZPqJ2pmF5U9r1txQsJ4N9gIP4XigeNJoarRy4K+94iJ6+EeJafJ0GNRD2LGDSvtqWyP2hnp92W8JKXLN12mc+878y8N7OOc2gH1PrJO60Z7imGCUXIinBJMfzQDFvicq0YFsv3GCbyhIOF14OnnE4wN3CPqsC9rwjnFMNvzfinGf/3G5hVDKPyLKfdpqaGjucYHiqGT802Pt5hQ/nueOFd4VhbIHIMoAjX7AHsccJV7XsDrZURw7OWAYRl90oibxUiN13q0Qzv2wWhqzCEC3ru9jk7ELMDF8vhbjOE3h07K9KGVBD9gXtWptHsILAambVrhOeNIGT2yEJOOkFmRlO0JnyZdeP1Xid83vQUa6kXv+YZrorLtY1n5gP3TkMQEj5NuGwBYlMxXKlFeKZ4SRF+thCV1YYWTVmxbURC+15vSK6+12snMjC2bzTSph31EPUw9Z+lhiFcTxz4kgDahJC/a8+OuJcSZiQehHDOxpiQ8aAZvsjntYhEfCfNmFGEHFtPmKTicZGo3qsH2e+7urn/uX09cE+GQKQoshmJOBC7kYFilKyemDwsR15fUu9GgeyNjKwzhiCPwyAMZAQSuP1JC14cyH8Lpu/dNFSDHyWtFbNeSfYkkLSuCJfCIITfuxBkMyoiW10I8vMAg9BBkRalz3jbDsKwGAKRJb/bQDThTBiEYaILQR5ZS1EyBeGIFEU2lE2TxkxACH9FJo0Veb3tFhDFQJEQFZDRbgHRvjecvPHAsNHxIITrl6eGjsSClKPiu+OdDqIIHyRCVKNic5vUPgisNLzjKOcT1nqP4YZpvaHDktpR5N1qCKImMcIXVnVtR1JPm4Kok9hC1o3Xu5Ka33eAx1nfTPFMpxwr5KZLPU7qg54WlcENOeGyJrzg2DA5/spGZjAvh01OSw5DCXfaIieGyZaevcv5RCulpuSNiWanWFOrpDJjkipYHAsfZcXO5A2IyqHQSOXdk22D3t8ubwz63rDx1GrbpDZQgVuSbUzZAZR6WjN8q75UU7n+IOWpVHZSFOXf3D1hvSGH5nSG/QWeqhQhNig5/gAAAABJRU5ErkJggg==" />
                Registrar
              </button>
            </Link>
          </div>

      <main className="container text-center">
        <h1 className="h1 mb-4">Gestión Profesionales Bienestar</h1>
        

        
        <div className="row justify-content-center mb-4">
          <div className="col-auto">
            <form className="d-inline-flex">
              <select id="areas" name="areas" className="temas">
                <option value>Área encargada</option>
                <option value="salud">Salud-Poliza</option>
                <option value="teatro">Teatro</option>
                <option value="danza">Danza</option>
                <option value="musica">Música</option>
              </select>
              <button className="btnBus ms-2" type="button">
                <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClklEQVR4nL1Vz2sTURBeVLSiPXgRWpEibUmzM4k3UTzUXwexkO6bsHgRe1VaWmz1XPRvEdQUpaJkJrnEH4WeCtJU0PoviGK9+AMbmbcbm9TsdrcGBx7svn1vv/m++d48x4kIX9whYrhjBB6R4Gsd+mwEbus351+DqtlhEnxMjJsk2Og4GDeJcWHXgCToGcavwQ9hlRhmipyFa5X8IR36rHPEUA9BNzzOjacHEfxFgt9I4Ob8vLMnaq1f8vcadieN4HfdkxhM5QqZKMj5pMmZintBwZRZIhltTQQbHuONpCDNIMGpsG4Lzo7Ft4WH1Ti5YmUUXNN/eGUYjFyodg0yghl9H3ueO5IWzFTcW6E55iIXkUBJF/ll1w3f743WRvelA8qj/sMwPowBsoexUVjM9NpNDC91YxqgwmKm1wIJvEoOJPDOMNzdFRDjUuSisMVsScdQJYbPppI/mlY6inPedjOoxcPO8GKiNtCTygyMs05889TeBXW1ql9y9xPjmxBsOdayzh97v7VdpZodjs1IKQcau5N287OTx0hgJZiDH8RwnwSueuKeMjzS18aGcTpM6smO1C0rwQ1tJ8Vy7qLOqcWNwPWga8CyHgNNxC+dPriVYO6SJqLty6/kTzhJQhuj0g9715RKEisX47RlG9Tmo8d4RhlfLg8dSASmzIIzgWtaZHWUX3MP67DuYpzVmoRrvpDAp/a7Curb5Y2WUWsWc/EF1wmUxgWOFxnO/f1dz2ICMMuuDIPau4jxgb3GGZc0AWXZ6kSqwNnOCcH7QjXT73QrJmoDPS03bjszxnV1cNfADI/0qVz/BaxQzfRHgZHg064BOU0wxvUO9VrpKpCGymQYP7TY/adhHOs6UBNM5bJtrIxXdPI3h6rp/8oovdgAAAAASUVORK5CYII=" />
                Buscar
              </button>
            </form>
          </div>
          
        </div>


        <div className="table-responsive">
        <h3 className="h3">Resultados:</h3>
          <table className="info-table mx-auto">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Número de documento</th>
                <th>Horario</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sebastián Ramírez</td>
                <td>12345837</td>
                <td><span className="highlight"><Link to="/prof_especifico">3 a 7 Junio</Link></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default GestionprofB;
