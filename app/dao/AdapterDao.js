const {tAdapterConf} = require('./db').db_tars;

const AdapterDao = {};

AdapterDao.getAdapterConfById = async(id) => {
    return await tAdapterConf.findOne({
        where: {
            id: id
        }
    });
};

AdapterDao.getAdapterConf = async(application, serverName, nodeName) => {
    return await tAdapterConf.findAll({
        where: {
            application: application,
            server_name: serverName,
            node_name: nodeName
        }
    });
};

AdapterDao.updateAdapterConf = async(params) => {
    return await tAdapterConf.update(params, {where: {id: params.id}});
};

module.exports = AdapterDao;