//
//  HomePageViewController.swift
//  KNWInventory
//
//  Created by Kevin Leong on 6/12/21.
//

import UIKit

class HomePageViewController: UIViewController {

    @IBOutlet weak var scanButton: UIButton!
    @IBOutlet weak var itemTableView: UITableView!
    
    let items = [
        "Screwdrivers",
        "Wrenches",
        "Screws",
        "180 Servos",
        "Continuous Rotation Servos",
        "FontenotBucks"
    ]
    let quantity = [
        1,
        5,
        7,
        9,
        11,
        10000
    ]
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        itemTableView.delegate = self
        itemTableView.dataSource = self

        // Do any additional setup after loading the view.
    }


}

extension HomePageViewController: UITableViewDelegate{
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        
        print("YOU HIT " + items[indexPath.row] )
    }
    
}
extension HomePageViewController:UITableViewDataSource{
    
    //Number of ROWS
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "itemCell", for: indexPath)
        
        cell.textLabel?.text = items[indexPath.row]
        
        return cell
    }
    
}
